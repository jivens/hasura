import styled from 'styled-components'

const TableStyles = styled.div`
  padding: 1rem;
  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid #ddd;
  }

   table {
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid #ddd;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      word-wrap: break-word;
      border-right: 1px solid #ddd;
      :last-child {
        border-right: 0;
      }
    }
  }
  .columnToggle {
    background: #fafafa;
    border: 1px solid #ddd;
  }
  ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
  }
  li {
    padding: 1rem;
  }
`

export default TableStyles