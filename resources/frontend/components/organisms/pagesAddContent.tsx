import { cn } from "@/lib/utils"
import { pageAddSchema, PageAddSchemaType } from "@/schemas/pageAddSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import { useForm } from "react-hook-form"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { LayoutComponents } from "../atoms/layoutComponents"
import { UserNav } from "../molecules/userNav"
import { Button, buttonVariants } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

export default function PagesAddContent() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      //   [{ 'direction': 'rtl' }],                         // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  }

  const form = useForm<PageAddSchemaType>({
    resolver: zodResolver(pageAddSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  const handleSubmit = (value: PageAddSchemaType) => {
    console.log(value)
  }

  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Pages</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body className='flex h-[calc(100vh-5rem)] items-center justify-center'>
        <div className='flex flex-col items-start gap-y-2'>
          <Link
            to='/dashboard/pages'
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center border-destructive text-destructive hover:bg-destructive hover:text-white",
            )}
          >
            <ArrowLeft className='h-4 w-4' />
            <span className='capitalize'>back</span>
          </Link>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='w-full max-w-3xl space-y-3 rounded-lg bg-white px-4 py-6'
            >
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder='Title' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <ReactQuill theme='snow' {...field} modules={modules} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
