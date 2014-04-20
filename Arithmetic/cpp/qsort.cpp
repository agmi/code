#include <iostream>
using namespace std;

int parition(int list[], int low, int high){
	int pivot = low;
	int middle = list[low];

	while(low<high){
		if(list[low] < middle){
			int tmp = list[low];
			list[low] = list[pivot];
			list[pivot] = tmp;
			pivot = low;
			low++;
		}
		else if(list[low] > middle){
			int i =0;
			for(i=high;i>low;i--){
				if(list[i]<middle){
					int tmp = list[i];
					list[i] = list[low];
					list[low] = tmp;
					break;
				}
			}
			if(i==low){
				break;
			}
		}
		else{
			low++;
		}
	}
	return pivot;
}

void qsort(int list[], int low, int high){
	if(low < high){
		int pivot = parition(list,low,high);
		qsort(list,0,pivot-1);
		qsort(list,pivot+1, high);
	}
}

int main(void){
	int list[] = {0,-2,11,-4,13,-5,14,-43};

	qsort(list,0,7);

	std::cout << std::endl;

	for(int i=0;i<8;i++){
		std::cout << list[i] << " ";
	}

	std::cout << std::endl;

	return 0;
}
