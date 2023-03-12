/// <reference types="react-scripts" />

type Header = string;
type Caption = string;
type Paragraph = string;

interface HeaderWithCaption {
    header: Header;
    caption: Caption;
}

interface Section {
    header: Header;
    paragraph: Paragraph;
}

type PropsWithClassName<P = unknown> = P & { className?: string };