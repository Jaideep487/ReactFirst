import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button  color='red'  text='Hello'/>
            <Button  color='green'  text='Hello 1'/>
            <Button  color='red'  text='Hello 2'/>
        </header>
    )
}
Header.defaultProps={
    title :'Task'
}
Header.propTypes = {
    title : PropTypes.string,
}
export default Header
