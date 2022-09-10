const Button = ({ setNum, num, children}) => {

  const add = () => {
    setNum(num +1)
  }

  return(
    <div className="button-container">
      <button onCLick={() => add()}>Click + </button>
      <button>Click - </button>
    </div>
  )
}

export default Button;
