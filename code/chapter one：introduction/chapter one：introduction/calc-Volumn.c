/* ͷ�ļ� */
#include<stdio.h>

/* ���峣�� */
#define Height 10
#define Height 10

/* �������� */
int calculate(int Long, int Width);

/* ������ main */
int main() {
	/* �������ͱ�������ʾ���� */
	int m_Long;
	/* �������ͱ�������ʾ��� */
	int m_Width;
	/* �������ͱ�������ʾ���������� */
	int result;
	/* ��ʾ��ʾ */
	printf("�����εĸ߶�Ϊ��%d\n", Height);
	printf("�����볤��\n");
	scanf_s("%d", &m_Long);
	printf("��������\n");
	scanf_s("%d", &m_Width);
	result = calculate(m_Long, m_Width);
	printf("����������Ϊ��");
	printf("%d\n", result);
	return 0;
}

int calculate(int Long, int Width) {
	int result = Long * Width * Height;
	return result;
}