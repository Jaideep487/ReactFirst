const tasks =[
    {
    id : 1,
    text : 'Doctors Appointemnt',
    day: "February 5th at 2:30pm",
    reminder : true,
    },
    {
        id : 2,
        text : 'Meetig at School',
        day: "February 6th at 1:30pm",
        reminder : true,
    },
    {
        id : 3,
        text : 'Food Shopping',
        day: "February 5th at 2:30pm",
        reminder : false,
    }
]
const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
