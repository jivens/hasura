import React from 'react'
import { useTable, usePagination } from 'react-table'
import gql from 'graphql-tag';

//import makeData from './makeData'
import TableStyles from '../../styles/table-styles'
import new_sentence_data from './makeAnnotationData'
import { Button } from 'react-bootstrap'
import { useMutation } from "@apollo/react-hooks"

const UPDATE_ANNOTATION = gql `
mutation updateAnnotations($anno: jsonb, $id: Int!) {
  update_annotations(
    where: {
    	id: {_eq: $id}
    },
    _set: {
  	  completed: "unconfirmed", 
    	annotation: $anno
    }
  ) {
    returning {
      id
    }
  }
}
`;

// Create an editable cell renderer
const EditableCell = ({
  cell: { value: initialValue },
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed externall, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
    <div className="tableWrap">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th width={column.width} {...column.getHeaderProps()} >{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className="saveAnnotation">
        <Button
          onClick={() => {
            //updateSentenceData()
          }}
        >
          Save
        </Button>
      </div>
    </>
  )
}

function Annotation(anno) {
  const sentence = anno.annotations.annotation.tokens
  const anno_id = anno.annotations.id
  const anno_type = anno.annotations.annotation_type
  console.log(anno_id + ' ' + anno_type)
  console.log(sentence)
    const columns = React.useMemo(
        () => [
            {
                Header: 'Sentences',
                columns: [
                    {
                      Header: 'Word',
                      accessor: 'word',
                      width: "30%",
                    },
                    {
                      Header: 'Start Offset',
                      accessor: 'startOffset',
                      width: "5%",
                    },
                    {
                      Header: 'End Offset',
                      accessor: 'endOffset',
                      width: "5%",
                    },
                    {
                      Header: 'Tag',
                      accessor: 'tag',
                      width: "20%",
                    },
                    {
                      Header: 'Lemma',
                      accessor: 'lemma',
                      width: "10%",
                    },
                    {
                      Header: 'Entity',
                      accessor: 'entity',
                      width: "10%"
                    },
                    {
                      Header: 'Norm',
                      accessor: 'norm',
                      width: "10%",
                    },
                    {
                      Header: 'Chunk',
                      accessor: 'chunk',
                      width: "10%"
                    },
                ],
            },
        ],
        []
    )
  
  const [data,setData] = React.useState(sentence)
  //const [data,setData] = React.useState(new_sentence_data.tokens)
  //const [data, setData] = React.useState(() => makeData(20))
  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  //FINISH THIS
  const [updateAnnotation, { loading: mutationLoading, error: mutationError}] = useMutation(UPDATE_ANNOTATION)

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData)

  return (
    <TableStyles>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        saveData={updateAnnotation}
        skipPageReset={skipPageReset}
      />
    </TableStyles>
  )
}

/* function Annotation() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sentences',
        columns: [
          {
            Header: 'Word',
            accessor: 'word',
          },
          {
            Header: 'Start Offset',
            accessor: 'startOffset',
          },
          {
            Header: 'End Offset',
            accessor: 'endOffset'
          },
          {
            Header: 'Tag',
            accessor: 'tag',
          },
          {
            Header: 'Lemma',
            accessor: 'lemma',
          },
          {
            Header: 'Entity',
            accessor: 'entity'
          },
          {
            Header: 'Norm',
            accessor: 'norm',
          },
          {
            Header: 'Chunk',
            accessor: 'chunk'
          },
        ],
      },
    ],
    []
  )

  //const data = React.useMemo(() => makeData(20), [])
  const data = new_sentence_data.tokens

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
} */

export default Annotation