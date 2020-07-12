import { CommonOptions } from "child_process";

interface Command {
    command: string,
    title: string,
}


const commands: Command[] = [
    {
        "command": "format-code.format.typescript",
        "title": "Format TypeScript"
    },
    {
        "command": "format-code.format.javascript",
        "title": "Format JavaScript"
    },
    {
        "command": "format-code.format.json",
        "title": "Format JSON"
    },
    {
        "command": "format-code.format.python",
        "title": "Format Python"
    },
    {
        "command": "format-code.format.ruby",
        "title": "Format Ruby"
    },
    {
        "command": "format-code.format.cpp",
        "title": "Format CPP"
    },
    {
        "command": "format-code.format.swift",
        "title": "Format Swift"
    },
    {
        "command": "format-code.format.go",
        "title": "Format Golang"
    },
    {
        "command": "format-code.format.java",
        "title": "Format Java"
    },
]

export default commands;