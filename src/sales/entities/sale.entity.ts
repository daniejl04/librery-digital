import { Column, DataSource, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateSale: Date;

    @Column()
    price: number;

}
