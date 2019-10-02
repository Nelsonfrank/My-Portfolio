exports.createPages = ({actions})=>{
    const { createPage } = actions

    const projects = [
        {
            title: " mhelepu",
            language: "reactjs"
        },
        {
            title: " mhelepu-shillingi-arts",
            language: "reactjs"
        },
        {
            title: " mhelepu-shillingi-arts",
            language: "reactjs"
        },
        {
            title: " mhelepu-shillingi-arts",
            language: "reactjs"
        }
    ]

    projects.forEach(data=>{
        createPage({
            path:`/${data.title}`,
            component:require.resolve(`./scr/templates/work.js`),
            context:{data}
        })
    })

}