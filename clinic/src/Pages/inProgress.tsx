import './PageStyles/inProgress.css'
import crane from '../assets/Icons/crane.svg'


function Progress() {
    return(
        <div className={'progress-container'}>
            <img src={crane} alt="crane image" />
            <h1>Przepraszamy!</h1>
            <h3>Ta strona jest w trakcie realizacji,<br/> zapraszamy już wkrótce!</h3>
        </div>
    )
}

export default Progress