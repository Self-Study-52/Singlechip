#include<stdio.h>

int main() {
	int i;
	int n;
	double s = 1;
	/*输入n值*/
	printf("请输入要计算阶乘的数值：\n");
	scanf_s("%d", &n);
	if (n >= 0) {
		for (i = 1; i <= n; i++) {
			s = s * i;
		};
		printf("%d!=%lf \n", n, s);
	}
	else {
		printf("Error \n");
	};
	return 0;
};