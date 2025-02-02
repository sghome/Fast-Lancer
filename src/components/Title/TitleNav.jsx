import styles from './Title.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function TitleNav({ pageTitle, pageHeader }) {
  const { user, setUser } = useUser()
  const { id } = useParams()

  switch (pageTitle) {
    case 'projects':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={' '}>{pageHeader}</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/projects/new">New Project</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'clients':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={' '}>{pageTitle}</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/clients/newclient">New Client</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'project detail':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/projects'}>Projects</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to={`/projects/edit/${id}`}>Edit Project</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'client detail':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/clients'}>Clients</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to={`/clients/edit/${id}`}>Edit Client</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'new-edit project':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/projects'}>Projects</a>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'new-edit client':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={'/clients'}>Clients</a>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link onClick={() => setUser({})} to="/login">
            Log Out
            </Link>
          </li>
        </ul>
      )

    case 'auth':
      return (
        <ul className={styles.tabnav}>
          <li className={styles.active}>
            <a href={' '}>{pageHeader}</a>
          </li>
          <li>
            <Link to={'/'}>⚛︎</Link>
          </li>
        </ul>
      )

    default:
      return 'err'
  }
}
