#include <iostream>
using namespace std;

void insertSort(int list[], int len){
    int tmp;
    for(int i=0;i<len;i++){
        for(int j=i;j<len;j++){
            if(list[j] < list[i]){
                tmp = list[i];
                list[i] = list[j];
                list[j] = tmp;
            } 
        }
    }
}

int main(void){
    int list[] = {2,55,1,13,4,5,2};
    insertSort(list,7);

    cout << endl;
    for(int i=0;i<7;i++){
        cout << list[i] << " ";
    }
    cout << endl;

    return 0;
}
