import prisma from '~/lib/prisma';

export async function setRoomStatus() {
  console.log('Setting room status to available');
  try {
    const data = await prisma.classrooms.updateMany({
      where: {
        available: true,
      },
      data: {
        available: false,
      },
    });
    if (data) {
      console.log('Room status updated');
      prisma.$disconnect();
      return 'completed';
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

setRoomStatus();
