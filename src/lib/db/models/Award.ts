export class Award {

    id:number;
    festival: string;
    festivalId:number;
    performance: string;
    performanceId:number;
    performanceIdentifier:string;
    awardType:string;
    awardTypeId:number;
    member:string;
    memberId:number;
    memberIdentifier:string;
    role:string;
    roleId:number;
    active:number;

    constructor(){
        this.id = 0;
        this.festival = '';
        this.festivalId = 0;
        this.performance = '';
        this.awardType = '';
        this.awardTypeId = 0;
        this.member = '';
        this.memberId = 0;
        this.role = '';
        this.roleId = 0;
        this.performanceIdentifier = '';
        this.memberIdentifier = '';
        this.performanceId = 0;
        this.active = -1;
    }

    async getAwardById(){}

    async getAwards(){}

    async getAwardsByMemberId(){}

    async getAwardsByPerformanceId(){}

    async updateAward(){}

    async insertAward(){}

    async deleteAward(){}

}