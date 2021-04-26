package org.cip4.xjdf.openapi

import java.io.FileOutputStream

fun main() {
    val converter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd"))
    converter.convert(FileOutputStream("build/resources/main/xjdf.yml"), true)
}