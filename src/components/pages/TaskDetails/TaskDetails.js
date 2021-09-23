import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import H1 from 'components/shared/H1'
import { NavLink, useParams } from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import { Badge, ListGroupItem, Table } from 'react-bootstrap'
import Placeholder from 'components/shared/Placeholder';
import TaskModel from "models/Task";

const TaskDetails = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch(`tasks/${id}.json`)
  const [task, settask] = useState(null)

  useEffect(() => {
    if (data)
      settask(new TaskModel(data))
  }, [data])

  return <>
    <H1 title={data?.title}>{data?.title}</H1>
    {
      loading ?
        <ListGroupItem>
          <Placeholder />
        </ListGroupItem>
        :
        <Table bordered responsive hover>
          <tbody>
            {task?.id &&
              <tr>
                <th className='text-end pe-5'>ID</th>
                <td>{task?.id}</td>
              </tr>
            }
            {task?.title &&
              <tr>
                <th className='text-end pe-5'>Titre</th>
                <td>{task?.title}</td>
              </tr>
            }
            {task?.priority &&
              <>
                <tr>
                  <th className='text-end pe-5'>Priorité</th>
                  <td><Badge bg={task?.getVariant()} text={["warning", "light"].includes(task?.getVariant()) ? "dark" : "light"}>{task?.priority}</Badge></td>
                </tr>
                <tr>
                  <th className='text-end pe-5'>Statut</th>
                  <td><Badge bg={task?.getVariant()} text={["warning", "light"].includes(task?.getVariant()) ? "dark" : "light"}>{task?.getCompleted()}</Badge></td>
                </tr>
              </>
            }
            {task?.description &&
              <tr>
                <th className='text-end pe-5'>Description</th>
                <td>{task?.description}</td>
              </tr>
            }
            {task?.deadline &&
              <>
                <tr>
                  <th className='text-end pe-5'>Deadline</th>
                  <td>{task?.deadline.toLocaleDateString()}</td>
                </tr>

                <tr>
                  <th className='text-end pe-5'>Temps restant</th>
                  <td>{task?.getRemaining()} jour{task?.getRemaining() > 1 ? 's' : ''}</td>
                </tr>
              </>
            }
            {task?.created &&
              <tr>
                <th className='text-end pe-5'>Créée le</th>
                <td>{task?.created.toLocaleDateString()}</td>
              </tr>
            }
            {task?.createdBy &&
              <tr>
                <th className='text-end pe-5'>Par</th>
                <td>{task?.createdBy}</td>
              </tr>
            }
            {task?.assignedTo &&
              <tr>
                <th className='text-end pe-5'>Assignée à</th>
                <td>{task?.assignedTo}</td>
              </tr>
            }
          </tbody>
        </Table>
    }
    <NavLink className="btn btn-dark me-3" to={`/tasks/`}>{'< Retour à la liste'}</NavLink>
  </>;
};

TaskDetails.propTypes = {
  //
};

export default TaskDetails;
