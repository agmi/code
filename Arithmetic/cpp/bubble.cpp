#include <iostream>
using namespace std;

void bubbleSort(int list[], int len){
    int tmp;
    for(int i=len;i>0;i--){
        for(int j=0;j<i;j++){
            if(list[j] > list[j+1]){
               tmp = list[j];
               list[j] = list[j+1];
               list[j+1] = tmp;
            }
        } 
    }
}

int main(void){
    int list[] = {2,55,1,13,4,5,2};
    bubbleSort(list,7);

    cout << endl;
    for(int i=0;i<7;i++){
        cout << list[i] << " ";
    }
    cout << endl;

    return 0;
}
