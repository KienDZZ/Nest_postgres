import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn()
  public id: number;

  @Column({nullable: true})
  public username: string;

  @Column({nullable: true})
  public fullname: string;

  @Column({nullable: true})
  public email: string;
}

export default User;