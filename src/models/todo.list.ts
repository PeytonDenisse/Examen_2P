import { Column, DataType, Model, Table } from "sequelize-typescript";

Table({
    tableName: 'todo_list'
})

//la tarea tiene ID Titulo Descripcion y completado
export class Tarea extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    completed!: boolean;
}