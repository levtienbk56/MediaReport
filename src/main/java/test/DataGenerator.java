package test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class DataGenerator {

	public static void main(String[] args) throws IOException {
		String content = "";
		int count =0;
		// [new Date(2017, 06, 27), 98],
		for (int y = 2000; y < 2018; y++) {
			for (int m = 0; m < 12; m++) {
				for (int d = 1; d < 29; d++) {
					long x = Math.round(30 + Math.random() * 100);
					String str = "[new Date(" + y+"," +m +"," +d +"), " + x + "],\n";
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
