const UserForm = () => {
    return (
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Apellido"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
    );
}

export default UserForm;