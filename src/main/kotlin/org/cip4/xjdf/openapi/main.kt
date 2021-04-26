package org.cip4.xjdf.openapi

import java.io.FileOutputStream

fun main() {
    val converter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd"))
    val tee = TeeOutputStream(System.out, FileOutputStream("build/resources/main/xjdf.yml"))
    converter.convert(tee, true)
}