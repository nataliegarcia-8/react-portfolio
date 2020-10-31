function Contact(i, t, l, it) {
    this.icon = i;
    this.title = t;
    this.link = l;
    this.touch = it;
}
const contactInfo = [
    new Contact("icon-github2 icon",
        "Github",
        "https://github.com/nataliegarcia-8",
        "https://github.com/nataliegarcia-8"),
    new Contact("icon-email icon",
        "Email",
        undefined,
        "gnatalie.booking@gmail.com"),
    new Contact("icon-mobile icon",
        "Phone",
        undefined,
        "(404) 388-2217"),
]

export default contactInfo;