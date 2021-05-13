import {useEffect, useState} from "react";
import API from "../../share/api";
import {Link} from "react-router-dom";

const ListExamApp = () => {
    const [isExpended, setExpended] = useState(false);
    const [ids, setIds] = useState([]);
    useEffect( () => {
         (async () => {
            const response = await API.user.getAllExam();
            const {
                examIds
            } = response;
            setIds(examIds);
        })();
    }, [])

    return (
        <div className={"container"}>
            <div className={"pt-5"}>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={() => setExpended(!isExpended)}
                    >
                        Select an exam
                    </button>
                    <ul className={"dropdown-menu dropdown-menu " + (isExpended ? "show" : "")}>
                        {
                            ids.map(id => (
                                <li key={id}><Link className={"dropdown-item"} to={`/user/exam/${id}`}>Exam #{id}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListExamApp;