import {body, param} from "express-validator";
import {validatorErrorsCatcher} from "../middlewares/validator-errors-catcher";
import {blogsRepo} from "../repo/blogs-repository";
import {blogsDB} from "../database/DB";

const titleValidator = body('title')
    .isString().withMessage('title must be a string')
    .trim()
    .isLength({
        min:1,
        max: 30
    }).withMessage('incorrect title')

const shortDescValidator = body('shortDescription')
    .isString().withMessage('short description must be a string')
    .trim()
    .isLength({
        min:1,
        max: 100
    }).withMessage('incorrect shortDescription')

const contentValidator = body('content')
    .isString().withMessage('content must be a string')
    .trim()
    .isLength({
        min:1,
        max: 1000
    }).withMessage('incorrect content')


export const blogIdValidator = body('blogId').isString().trim()
    .custom((blogId) =>{
        const blog = blogsRepo.getBlogById(blogId)
        if (!blog){return false}
        return true
    }).withMessage("incorrect blogId")

export const postValidation = () =>[titleValidator, shortDescValidator, contentValidator,blogIdValidator, validatorErrorsCatcher]
