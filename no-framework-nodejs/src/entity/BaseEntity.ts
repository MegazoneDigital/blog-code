export abstract class BaseEntity {

    id: number | null;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.createdAt = this.createdAt ? this.createdAt : new Date();
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date();
    }

    renewCreatedAt(date: Date) {
        this.createdAt = date;
        this.renewUpdatedAt(date);
    }

    renewUpdatedAt(date: Date) {
        this.updatedAt = date;
    }

    isInsertTarget() {
        return !this.id;
    }

    validateExistId() {
        if (!this.id) {
            throw new Error('수정/삭제시 ID값은 필수입니다.');
        }
    }
}
