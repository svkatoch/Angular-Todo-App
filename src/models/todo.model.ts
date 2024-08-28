export class Todo {
    public parameter = {
        id: 0,
        title: "",
        category: "",
        date: "",
        done: false
    };

    constructor(
        public id: Number,
        public title: String,
        public category: String,
        public date: String,
        public done: Boolean
    ) {
        this.parameter.id = Number(id);
        this.parameter.title = String(title);
        this.parameter.category = String(category);
        this.parameter.date = String(date);
        this.parameter.done = Boolean(done);
    }
    
}
