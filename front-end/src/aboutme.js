import './Header.css'
import me from './me.jpeg'

/**
 * A React component that is used for the header displayed at the top of every page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
    <h1>Hello!</h1>
    <p>My name in Junrui Li, currently a junior at NYU majoring in Mathematics and Computer Science. </p>
    <p>I am interested in playing CS:GO and watch relative tournament. I am also a big fan of MachineWJQ who streams at www.douyu/6657.com</p>
    <img src={me} style={{width:100}} alt='My Photo'></img>
    </>
  )
}

export default Aboutme