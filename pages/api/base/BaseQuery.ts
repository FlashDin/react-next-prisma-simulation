import {PrismaClient} from '@prisma/client'

export class BaseQuery<M> {

    public prisma: PrismaClient;
    public model: string;

    constructor(model: string) {
        this.prisma = new PrismaClient();
        this.model = model;
    }

    findModelAll() {
        return this.prisma[this.model].findMany();
    }

    findModelById(id: any) {
        return this.prisma[this.model].findUnique({
            where: {
                id: id
            }
        });
    }

    close(func: Function) {
        func.then(async () => {
            await prisma.$disconnect();
        })
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
                process.exit(1);
            });;
    }
}
