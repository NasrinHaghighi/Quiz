//import { shuffle } from './utils'

export type Question={
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    type:string,
    userAnswer?:string

    }
    export type QuestionState=Question & {answers:string[]}//we make a new property for question object that includes all answers and we do map on it// this is type of that//
interface Props{
    number:number,
    category:number,
 difficulty:string
}
interface Start{
    start:Props
}
export const fetchData =async ({start}:Start)=>{
    //console.log(start)
    const {difficulty, category, number}=start
    const url=`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`
    const data= await fetch(url)
    const res=await data.json()
   
     return res.results.map((question:Question)=>(
        {
            ...question,
            answers:([...question.incorrect_answers, question.correct_answer])
        }
     ))
     
     } 