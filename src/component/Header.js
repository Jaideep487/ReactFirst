import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')   
    }

    return (
        <header className='header'>
            <h1>{title }</h1>
            <h2>Hello</h2>
            <Button  color='red'  text='Add' onClick={onClick}/>
            
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
