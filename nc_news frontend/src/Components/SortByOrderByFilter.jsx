import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function SortByOrderByFilter({sortBy,setOrderBy,setSortBy}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    function formSelectSortBy(event,queryType){
        event.preventDefault();
        console.log(event.target.value)

        setSortBy(event.target.value)
        console.log(searchParams,'<==URL SearchParmas')
        const params = Object.fromEntries(searchParams)
        console.log(params, '<==existig searchParams as an object')
        params[queryType]= event.target.value
        setSearchParams(params)
        // const pathName = location.pathname+ JSON.stringify(queryObject)
        // navigate(pathName);

    }
    
  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Sort by</Form.Label>
            <Form.Select
              onChange={(event)=>{formSelectSortBy(event,'sortBy')}}
            >
              <option>Comment Count</option>
              <option>Date</option>
              <option>Votes</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Order by</Form.Label>
            <Form.Select
              onChange={(event)=>{formSelectSortBy(event,'orderBy')}}
            >
              <option>Ascending</option>
              <option>Descending</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
