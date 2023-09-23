import { ILaw } from "@/models";

export function insertionSort(arr: ILaw[], filter: string){
    for(let i = 1; i < arr.length;i++){
        for(let j = i - 1; j > -1; j--){
            if (filter === 'likes') {
                if(arr[j + 1].likes > arr[j].likes){
                    [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
                }
            } else if (filter === 'views') {
                if(arr[j + 1].viewed > arr[j].viewed){
                    [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
                }
            } else if (filter === 'newest') {
                return arr.reverse()
            }
        }
    };

  return arr;
}
