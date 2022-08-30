import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface iRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name, description}: iRequest): void {

    const categorieAlreadyExists = this.categoriesRepository.findByName(name);

    if(categorieAlreadyExists){
        throw new Error("Category Already Exists!");
    }

    this.categoriesRepository.create({name, description});

    }
}

export {CreateCategoryUseCase}