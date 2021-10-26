/* 头文件 */
#include<stdio.h>

/* 定义常量 */
#define Height 10
#define Height 10

/* 函数声明 */
int calculate(int Long, int Width);

/* 主函数 main */
int main() {
	/* 定义整型变量，表示长度 */
	int m_Long;
	/* 定义整型变量，表示宽度 */
	int m_Width;
	/* 定义整型变量，表示长方体的体积 */
	int result;
	/* 显示提示 */
	printf("长方形的高度为：%d\n", Height);
	printf("请输入长度\n");
	scanf_s("%d", &m_Long);
	printf("请输入宽度\n");
	scanf_s("%d", &m_Width);
	result = calculate(m_Long, m_Width);
	printf("长方体的体积为：");
	printf("%d\n", result);
	return 0;
}

int calculate(int Long, int Width) {
	int result = Long * Width * Height;
	return result;
}