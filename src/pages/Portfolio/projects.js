function Project(du, t, gu, c, i) {
    this.deployedUrl = du;
    this.title = t;
    this.githubUrl = gu;
    this.category = c;
    this.imgSrc = i;
}
const projects = [
    new Project("https://rocky-reaches-21290.herokuapp.com/",
        "Reality Tasks",
        "https://github.com/nataliegarcia-8/reality-tasks",
        "Projects",
        "images/reality-tasks.png"),
    new Project("https://www.third-lens.org/donate/hope-builders-program-2/",
        "Hope Builders Program",
        undefined,
        "Related Experience",
        "images/hope-builders.png"),
    new Project("https://nataliegarcia-8.github.io/Domestic-Covid19-TravelApp/",
        "Masked Wanderer",
        "https://github.com/nataliegarcia-8/Domestic-Covid19-TravelApp",
        "Projects",
        "images/masked-wanderer.png"),
        new Project("http://picturewindow.mynmi.net/index.html",
        "Picture Window",
        undefined,
        "Related Experience",
        "images/picture-window.png"),
        new Project("https://nataliegarcia-8.github.io/weather-dashboard/",
        "Weather Dashboard",
        "https://github.com/nataliegarcia-8/weather-dashboard",
        "Projects",
        "images/weather-dash.png"),
        new Project("https://nataliegarcia-8.github.io/work-day-scheduler/",
        "Work Day Scheduler",
        "https://github.com/nataliegarcia-8/work-day-scheduler",
        "Projects",
        "images/work-day-scheduler.png"),
]

export default projects;