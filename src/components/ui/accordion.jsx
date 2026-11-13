import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ className, ...props }) {
  return <AccordionPrimitive.Root className={cn(className)} {...props} />
}

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item className={cn('faq-item', className)} {...props} />
  )
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn('faq-trigger group', className)}
        {...props}
      >
        <span>{children}</span>
        <ChevronDown
          aria-hidden="true"
          className="faq-chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn('faq-content', className)}
      {...props}
    >
      <div className="faq-answer">{children}</div>
    </AccordionPrimitive.Content>
  )
}
