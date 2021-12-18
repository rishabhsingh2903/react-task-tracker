import PropTypes from 'prop-types'
import Button from './button'

const header = ({title,onClickButton,showAdd}) => {



    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClickButton} />
                       
        </header>
    )
}
header.defaultProps={
    title: 'task tracker',
}
header.propTypes= {
    title: PropTypes.string.isRequired,
}
// const headingstyle={
// color: 'blue',backgroundColor: 'grey'
// }
export default header
