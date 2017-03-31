package test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class DataGenerator {

	public static void main(String[] args) throws IOException {
		String content = "";
		int count = 0;
		long extra = 0;
		long extra2 = 0;
		// [new Date(2017, 06, 27), 98],
		for (int y = 2010; y < 2018; y++) {
			extra = Math.round(20 + Math.random() * 10);
			for (int m = 0; m < 12; m++) {
				extra2 = Math.round(Math.random() * 20);
				for (int d = 1; d < 29; d++) {
					long x = Math.round(extra - extra2 + 30 + Math.random() * 100);
					String str = "[new Date(" + y + "," + m + "," + d + "), " + x + "],\n";
					content += str;
					count++;
				}
			}
		}

		String fileName = "C:/dev/report/data.txt";
		Files.write(Paths.get(fileName), content.getBytes(), StandardOpenOption.CREATE);

		System.out.println(count);
	}

}
