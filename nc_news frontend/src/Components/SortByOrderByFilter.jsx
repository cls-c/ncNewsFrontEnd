import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function SortByOrderByFilter({sortBy,setOrderBy,setSortBy}) {
    const [searchParams, setSearchParams] = useSearchParams();
    function formSelectSortBy(event,queryType){
        event.preventDefault();
        if (queryType ==="sort_by"){
            setSortBy(event.target.value)            
        } else if (queryType === "order"){
            setOrderBy(event.target.value)
        }

        const params = Object.fromEntries(searchParams)
        params[queryType]= event.target.value
        setSearchParams(params)

    }
    
  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Sort by</Form.Label>
            <Form.Select
              onChange={(event)=>{formSelectSortBy(event,'sort_by')}}
            >
              <option value="comment_count">Comment Count</option>
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Order by</Form.Label>
            <Form.Select
              onChange={(event)=>{formSelectSortBy(event,'order')}}
            >
              <option value = "ASC">Ascending</option>
              <option value= "DESC">Descending</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
