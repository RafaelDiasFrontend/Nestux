import { User } from "./user";
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    save(options: any): Promise<any>;
}
