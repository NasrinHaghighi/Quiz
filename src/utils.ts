export const shuffle=(array:any)=>{
    array.sort(function () {
        return Math.random() - 0.5;
})
}