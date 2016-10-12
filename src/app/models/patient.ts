import {Gender} from './enums/gender';
import {EnumDesc} from './enums/enumDesc';

export class Patient {
    initials: string;
    infix: string;
    lastName: string;
    birthDate: Date;
    gender: EnumDesc<Gender>;
    bsn: string;

    static fromObject(item: any): Patient {
        const result = new Patient();

        result.initials = item.initials;
        result.infix = item.infix;
        result.lastName = item.lastName;
        result.birthDate = item.birthDate ? new Date(item.birthDate) : undefined;
        result.gender = EnumDesc.fromObject<Gender>(item.gender);
        result.bsn = item.bsn;

        return result;
    }

    get fullName(): string {
        return [
            this.initials,
            this.lastName
        ].join(' ');
    }
}