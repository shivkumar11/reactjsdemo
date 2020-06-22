import React, { Fragment } from "react"
import { Card, Form, Button, Badge } from "react-bootstrap"
import DataTable from "react-data-table-component"
import { Trash, Edit, Search } from "react-feather"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { getData } from "../redux/action/role/index"
import moment from 'moment'

const CustomHeader = props => {
  return (
    <Fragment>
      <Link className="btn" to="/role/create">
        <Button size="md" rounded outline color="info" className="float-left">Add</Button>
      </Link>
      <div className="position-relative has-icon-left mb-1" style={{ width: '25%', float: 'right' }}>
        <Form.Control value={props.value} onChange={e => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </Fragment>
  )
}

const columns =  [
  {
    name: "Sl.No",
    selector: "id",
    sortable: true,
    width:"80px"
  },
  {
    name: "Role Name",
    selector: "role_name",
    sortable: true
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Created Date",
    selector: "c_date",
    sortable: true,
  },
  {
    name: "Action",
    selector: "action",
    sortable: false,
  }
]

class RoleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: "",
      filteredData: [],
    }
  }
  

  async componentDidMount() {
    await this.props.getData('{}', '{}')
  }

  dataFilter = ()=>{
    console.log("ss", this.props)
    const {app: data} = this.props;
    const {value, filteredData} = this.state;
    let filterData = data.map((list, key)=>{
      return {
        id: key+1,
        role_name: list.role_name,
        c_date: moment(list.c_date).format('DD-MM-YYYY'),
        status: (list.status === true ? (
          <Badge color="primary" className="mr-1 mb-1">
            ACTIVE
          </Badge>
        ) : (
            <Badge color="danger" className="mr-1 mb-1">
              INACTIVE
            </Badge>
        )),
        action: (
          <div className="d-flex flex-column align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link className="text-dark w-100" to={'/role/create/'+list.id}>
                  <Edit size="20" className="text-primary" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-dark w-100" to={'/role/create/' + list.id}>
                  <Trash size="20" className="text-primary" />
                </Link>
              </li>
            </ul>
          </div>
        )
      }
    });
    if(!this.state.filterData)
    {
      this.setState({filterData})
    }
    
    if(filterData && filterData.length){
      return (
        <DataTable
          className="dataTable-custom"
          data={value.length ? filteredData : filterData}
          columns={columns}
          noHeader
          pagination
          subHeader
          subHeaderComponent={
            <CustomHeader handleFilter={this.handleFilter} />
          }
        />
      )
    }
  }

  handleFilter = e => {
    let value = e.target.value
    const {filterData} = this.state;
    let filteredData = this.state.filteredData
    this.setState({ value })

    if (value.length) {
      filteredData = filterData.filter(item => {
        let startsWithCondition =
          item.role_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .startsWith(value.toLowerCase())
        let includesCondition =
          item.role_name.toLowerCase().includes(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({ filteredData })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Body className="rdt_Wrapper">
            {this.props.app && this.dataFilter()}
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state", state)
  return {
    app: state.roleApp.role
  }
}
export default connect(mapStateToProps, {
  getData
})(RoleList)