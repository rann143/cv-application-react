class Education {
    constructor(uuid) {
        this.school = '';
        this.degree = '';
        this.gradDate = '';
        this.id = uuid;
    }
}

class WorkExperience {
    constructor(uuid) {
        this.company = '';
        this.position = '';
        this.startDate = '';
        this.endDate = '';
        this.id = uuid
    }
}

class Contact {
    constructor(uuid) {
        this.name = '',
        this.email = '',
        this.cell = '',
        this.linkedIn = '',
        this.id = uuid
    }
}

export { Contact, Education, WorkExperience }