class TodosController {
    public async get(req, res) {
        try {
            res.sendStatus(200);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default TodosController;