const Separator = ({ text }) => {
  return (
    <>
        <div style={{height: '75px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <h2>{ text }</h2>
            <div style={{display: 'flex'}}>
                <div style={{backgroundColor: 'blue', height: '5px', width: '50px', border: '0.5px solid gray'}}></div>
                <div style={{backgroundColor: 'white', height: '5px', width: '50px', border: '0.5px solid gray'}}></div>
                <div style={{backgroundColor: 'red', height: '5px', width: '50px', border: '0.5px solid gray'}}></div>
            </div>
        </div>
    </>
  )
}

export default Separator