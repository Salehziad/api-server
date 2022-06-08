class Collection {
    constructor(model) {
        this.model = model
    }
    async create(obj) {
        try {
            let record = await this.model.create(obj)
            return record;
        } catch (e) {
            console.log('server error while adding record in model', this.model)
        }
    }
    async read(id) {
        if (id) {
            try {
                let record = await this.model.findOne({
                    where: {
                        id: id
                    }
                });
                return record;
            } catch (e) {
                console.log('server error while reading one record in this moel', this.model)
            }
        }
        try {
            let record = await this.model.findAll();
            return record;
        } catch (e) {
            console.log('server error while reading all record in this moel', this.model)
        }
    }
    async delete(id) {
        if (!id) {
            try {
                let deleted = await this.model.destroy({
                    truncate: true
                });
                return deleted;
            } catch (e) {
                console.error("error in deleting all the record in model", this.model);
            }
        } else {
            try {
                let deleted = await this.model.destroy({
                    where: {
                        id: id
                    }
                });
                return deleted;
            } catch (e) {
                console.error("error in deleting the record in model", this.model);
            }
        }
    }
    async update(id) {
        try {
            let updated = await record.update(obj);
            return updated;
        } catch (e) {
            console.error("error in updating the record in model", this.model);

        }
    }
}

module.exports = Collection;