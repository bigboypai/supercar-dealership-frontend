const Separator = ({ text }) => {
  return (
    <>
        <div style={{height: '75px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <h2>{ text }</h2>
            <div className="italy-flag" style={{display: 'flex'}}>
                <div className="italy-green" style={{backgroundColor: 'green', height: '5px', width: '50px', border: '1px solid gray'}}></div>
                <div className="italy-white" style={{backgroundColor: 'white', height: '5px', width: '50px', border: '1px solid gray'}}></div>
                <div className="italy-red" style={{backgroundColor: 'red', height: '5px', width: '50px', border: '1px solid gray'}}></div>
            </div>
        </div>
    </>
  )
}

export default Separator