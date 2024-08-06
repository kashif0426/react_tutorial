export default function Message () {
    function handlerClick (){
        alert("You have officialy clicked a button!")
    }

    return <div>
        <button onClick={handlerClick}>Click here to get a message!</button>
    </div>
}